:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'transit'
.. highlight: bash

transit
=======

.. conda:recipe:: transit
   :replaces_section_title:
   :noindex:

   TRANSIT

   :homepage: https://github.com/ioerger/transit
   :license: GPL3 / GPL-3.0-only
   :recipe: /`transit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/transit/meta.yaml>`_

   TRANSIT is a software that can be used to analyze Tn\-Seq datasets.
   It includes various statistical calculations of essentiality of
   genes or genomic regions \(including conditional essentiality
   between 2 conditions\).



.. conda:package:: transit

   |downloads_transit| |docker_transit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.3.20-0</code>,  <code>3.3.19-0</code>,  <code>3.2.3-0</code>,  <code>3.2.2-0</code>,  <code>3.2.1-0</code>,  <code>3.2.0-0</code>,  <code>3.1.0-0</code>,  <code>3.0.2-1</code>,  <code>3.0.2-0</code>,  </span></summary>
      

      ``3.3.20-0``,  ``3.3.19-0``,  ``3.2.3-0``,  ``3.2.2-0``,  ``3.2.1-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.5.2-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on matplotlib-base: 
   :depends on numpy: ``<1.20``
   :depends on pandas: ``<0.25``
   :depends on pillow: 
   :depends on python: ``>=3.6``
   :depends on scikit-learn: 
   :depends on scipy: ``<1.8.0``
   :depends on statsmodels: 

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

    pixi global install transit

to add into an existing workspace instead, run::

    pixi add transit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install transit

Alternatively, to install into a new environment, run::

    conda create -n envname transit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/transit:<tag>

(see `transit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_transit| image:: https://img.shields.io/conda/dn/bioconda/transit.svg?style=flat
   :target: https://anaconda.org/bioconda/transit
   :alt:   (downloads)
.. |docker_transit| image:: https://quay.io/repository/biocontainers/transit/status
   :target: https://quay.io/repository/biocontainers/transit
.. _`transit/tags`: https://quay.io/repository/biocontainers/transit?tab=tags


.. raw:: html

    <script>
        var package = "transit";
        var versions = ["3.3.20","3.3.19","3.2.3","3.2.2","3.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/transit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/transit/README.html