:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snoscan'
.. highlight: bash

snoscan
=======

.. conda:recipe:: snoscan
   :replaces_section_title:
   :noindex:

   Search for C\/D box methylation guide snoRNA genes in a genomic sequence

   :homepage: http://lowelab.ucsc.edu/snoscan
   :license: GNU General Public License, version 2
   :recipe: /`snoscan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snoscan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snoscan/meta.yaml>`_
   :links: biotools: :biotools:`snoscan`

   


.. conda:package:: snoscan

   |downloads_snoscan| |docker_snoscan|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0-5</code>,  <code>1.0-4</code>,  <code>1.0-3</code>,  <code>1.0-2</code>,  <code>1.0-1</code>,  <code>1.0-0</code>,  <code>0.9.1-2</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  </span></summary>
      

      ``1.0-5``,  ``1.0-4``,  ``1.0-3``,  ``1.0-2``,  ``1.0-1``,  ``1.0-0``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9b-3``,  ``0.9b-2``,  ``0.9b-1``,  ``0.9b-0``

      
      .. raw:: html

         </details>
      

   
   :depends on libgcc-ng: ``>=12``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on perl-module-build: ``0.4234.*``

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

    pixi global install snoscan

to add into an existing workspace instead, run::

    pixi add snoscan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install snoscan

Alternatively, to install into a new environment, run::

    conda create -n envname snoscan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/snoscan:<tag>

(see `snoscan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_snoscan| image:: https://img.shields.io/conda/dn/bioconda/snoscan.svg?style=flat
   :target: https://anaconda.org/bioconda/snoscan
   :alt:   (downloads)
.. |docker_snoscan| image:: https://quay.io/repository/biocontainers/snoscan/status
   :target: https://quay.io/repository/biocontainers/snoscan
.. _`snoscan/tags`: https://quay.io/repository/biocontainers/snoscan?tab=tags


.. raw:: html

    <script>
        var package = "snoscan";
        var versions = ["1.0","1.0","1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snoscan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snoscan/README.html