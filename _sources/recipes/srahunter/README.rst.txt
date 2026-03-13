:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srahunter'
.. highlight: bash

srahunter
=========

.. conda:recipe:: srahunter
   :replaces_section_title:
   :noindex:

   srahunter is a tool for processing SRA accession numbers.

   :homepage: https://github.com/GitEnricoNeko/srahunter
   :license: MIT / MIT
   :recipe: /`srahunter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srahunter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srahunter/meta.yaml>`_

   


.. conda:package:: srahunter

   |downloads_srahunter| |docker_srahunter|

   :versions:
      
      

      ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``

      

   
   :depends on datavzrd: 
   :depends on entrez-direct: 
   :depends on pandas: ``>=2.0.2``
   :depends on psutil: ``>=5.7``
   :depends on pyfiglet: 
   :depends on python: ``>=3.6``
   :depends on requests: ``>=2.31.0``
   :depends on sra-tools: 
   :depends on tqdm: ``>=4.66.1``

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

    pixi global install srahunter

to add into an existing workspace instead, run::

    pixi add srahunter

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install srahunter

Alternatively, to install into a new environment, run::

    conda create -n envname srahunter

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/srahunter:<tag>

(see `srahunter/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_srahunter| image:: https://img.shields.io/conda/dn/bioconda/srahunter.svg?style=flat
   :target: https://anaconda.org/bioconda/srahunter
   :alt:   (downloads)
.. |docker_srahunter| image:: https://quay.io/repository/biocontainers/srahunter/status
   :target: https://quay.io/repository/biocontainers/srahunter
.. _`srahunter/tags`: https://quay.io/repository/biocontainers/srahunter?tab=tags


.. raw:: html

    <script>
        var package = "srahunter";
        var versions = ["0.0.9","0.0.8","0.0.7","0.0.6","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srahunter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srahunter/README.html