:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ngs-chew'
.. highlight: bash

ngs-chew
========

.. conda:recipe:: ngs-chew
   :replaces_section_title:
   :noindex:

   Simple QC and sanity checking of germline NGS data

   :homepage: https://github.com/bihealth/ngs-chew
   :license: MIT / MIT
   :recipe: /`ngs-chew <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-chew>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ngs-chew/meta.yaml>`_

   


.. conda:package:: ngs-chew

   |downloads_ngs-chew| |docker_ngs-chew|

   :versions:
      
      

      ``0.9.4-0``,  ``0.9.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``

      

   
   :depends on attrs: 
   :depends on bcftools: 
   :depends on cattrs: 
   :depends on click: 
   :depends on logzero: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on pyarrow: 
   :depends on pysam: 
   :depends on python: ``>=3.8``
   :depends on samtools: 
   :depends on scipy: 
   :depends on tqdm: 
   :depends on vcfpy: 

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

    pixi global install ngs-chew

to add into an existing workspace instead, run::

    pixi add ngs-chew

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ngs-chew

Alternatively, to install into a new environment, run::

    conda create -n envname ngs-chew

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ngs-chew:<tag>

(see `ngs-chew/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ngs-chew| image:: https://img.shields.io/conda/dn/bioconda/ngs-chew.svg?style=flat
   :target: https://anaconda.org/bioconda/ngs-chew
   :alt:   (downloads)
.. |docker_ngs-chew| image:: https://quay.io/repository/biocontainers/ngs-chew/status
   :target: https://quay.io/repository/biocontainers/ngs-chew
.. _`ngs-chew/tags`: https://quay.io/repository/biocontainers/ngs-chew?tab=tags


.. raw:: html

    <script>
        var package = "ngs-chew";
        var versions = ["0.9.4","0.9.2","0.8.1","0.8.0","0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ngs-chew/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ngs-chew/README.html