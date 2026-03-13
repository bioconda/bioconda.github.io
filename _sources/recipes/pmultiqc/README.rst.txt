:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pmultiqc'
.. highlight: bash

pmultiqc
========

.. conda:recipe:: pmultiqc
   :replaces_section_title:
   :noindex:

   Python package for quality control of proteomics datasets\, based on multiqc package

   :homepage: https://github.com/bigbio/pmultiqc/
   :license: MIT / MIT
   :recipe: /`pmultiqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmultiqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pmultiqc/meta.yaml>`_

   


.. conda:package:: pmultiqc

   |downloads_pmultiqc| |docker_pmultiqc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.0.41-0</code>,  <code>0.0.40-0</code>,  <code>0.0.39-0</code>,  <code>0.0.38-0</code>,  <code>0.0.36-1</code>,  <code>0.0.36-0</code>,  <code>0.0.34-0</code>,  <code>0.0.33-0</code>,  <code>0.0.32-0</code>,  </span></summary>
      

      ``0.0.41-0``,  ``0.0.40-0``,  ``0.0.39-0``,  ``0.0.38-0``,  ``0.0.36-1``,  ``0.0.36-0``,  ``0.0.34-0``,  ``0.0.33-0``,  ``0.0.32-0``,  ``0.0.31-0``,  ``0.0.30-0``,  ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.27-0``,  ``0.0.26-0``,  ``0.0.25-0``,  ``0.0.24-0``,  ``0.0.23-0``,  ``0.0.22-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``,  ``0.0.14-0``,  ``0.0.13-0``,  ``0.0.12-0``,  ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on lxml: 
   :depends on multiqc: ``>=1.29,<=1.32``
   :depends on numpy: ``>=1.23``
   :depends on pandas: ``>=1.5``
   :depends on pyarrow: 
   :depends on pyopenms: ``<=3.4.0``
   :depends on pyteomics: 
   :depends on pytest: 
   :depends on python: ``>=3.10,<3.13``
   :depends on scikit-learn: ``>=1.2``
   :depends on sdrf-pipelines: ``>=0.0.33,<0.1.0``
   :depends on statsmodels: 
   :depends on urllib3: ``>=2.6.1``

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

    pixi global install pmultiqc

to add into an existing workspace instead, run::

    pixi add pmultiqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pmultiqc

Alternatively, to install into a new environment, run::

    conda create -n envname pmultiqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pmultiqc:<tag>

(see `pmultiqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pmultiqc| image:: https://img.shields.io/conda/dn/bioconda/pmultiqc.svg?style=flat
   :target: https://anaconda.org/bioconda/pmultiqc
   :alt:   (downloads)
.. |docker_pmultiqc| image:: https://quay.io/repository/biocontainers/pmultiqc/status
   :target: https://quay.io/repository/biocontainers/pmultiqc
.. _`pmultiqc/tags`: https://quay.io/repository/biocontainers/pmultiqc?tab=tags


.. raw:: html

    <script>
        var package = "pmultiqc";
        var versions = ["0.0.41","0.0.40","0.0.39","0.0.38","0.0.36"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pmultiqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pmultiqc/README.html