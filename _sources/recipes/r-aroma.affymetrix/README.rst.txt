:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-aroma.affymetrix'
.. highlight: bash

r-aroma.affymetrix
==================

.. conda:recipe:: r-aroma.affymetrix
   :replaces_section_title:
   :noindex:

   A cross\-platform R framework that facilitates processing of any number of Affymetrix microarray samples regardless of computer system.  The only parameter that limits the number of chips that can be processed is the amount of available disk space.  The Aroma Framework has successfully been used in studies to process tens of thousands of arrays.  This package has actively been used since 2006.

   :homepage: http://www.aroma-project.org/, https://github.com/HenrikBengtsson/aroma.affymetrix
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`r-aroma.affymetrix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.affymetrix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-aroma.affymetrix/meta.yaml>`_

   


.. conda:package:: r-aroma.affymetrix

   |downloads_r-aroma.affymetrix| |docker_r-aroma.affymetrix|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.2.3-0</code>,  <code>3.2.2-1</code>,  <code>3.2.2-0</code>,  <code>3.2.1-3</code>,  <code>3.2.1-2</code>,  <code>3.2.1-0</code>,  <code>3.2.0-4</code>,  <code>3.2.0-3</code>,  <code>3.2.0-2</code>,  </span></summary>
      

      ``3.2.3-0``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.2.1-3``,  ``3.2.1-2``,  ``3.2.1-0``,  ``3.2.0-4``,  ``3.2.0-3``,  ``3.2.0-2``,  ``3.2.0-1``,  ``3.2.0-0``,  ``3.1.1-2``,  ``3.1.1-1``,  ``3.1.1-0``,  ``3.1.0-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on r-aroma.apd: ``>=0.6.0``
   :depends on r-aroma.core: ``>=3.2.0``
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-future: 
   :depends on r-listenv: 
   :depends on r-mass: 
   :depends on r-matrixstats: ``>=0.55.0``
   :depends on r-r.cache: ``>=0.14.0``
   :depends on r-r.devices: ``>=2.16.1``
   :depends on r-r.filesets: ``>=2.13.0``
   :depends on r-r.methodss3: ``>=1.7.1``
   :depends on r-r.oo: ``>=1.23.0``
   :depends on r-r.utils: ``>=2.9.0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install r-aroma.affymetrix

to add into an existing workspace instead, run::

    pixi add r-aroma.affymetrix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-aroma.affymetrix

Alternatively, to install into a new environment, run::

    conda create -n envname r-aroma.affymetrix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-aroma.affymetrix:<tag>

(see `r-aroma.affymetrix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-aroma.affymetrix| image:: https://img.shields.io/conda/dn/bioconda/r-aroma.affymetrix.svg?style=flat
   :target: https://anaconda.org/bioconda/r-aroma.affymetrix
   :alt:   (downloads)
.. |docker_r-aroma.affymetrix| image:: https://quay.io/repository/biocontainers/r-aroma.affymetrix/status
   :target: https://quay.io/repository/biocontainers/r-aroma.affymetrix
.. _`r-aroma.affymetrix/tags`: https://quay.io/repository/biocontainers/r-aroma.affymetrix?tab=tags


.. raw:: html

    <script>
        var package = "r-aroma.affymetrix";
        var versions = ["3.2.3","3.2.2","3.2.2","3.2.1","3.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-aroma.affymetrix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-aroma.affymetrix/README.html