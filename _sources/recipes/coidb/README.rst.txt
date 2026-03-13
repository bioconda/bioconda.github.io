:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'coidb'
.. highlight: bash

coidb
=====

.. conda:recipe:: coidb
   :replaces_section_title:
   :noindex:

   A tool to obtain and maintain a database of COI metabarcode references

   :homepage: https://github.com/johnne/coidb
   :license: MIT
   :recipe: /`coidb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coidb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/coidb/meta.yaml>`_

   


.. conda:package:: coidb

   |downloads_coidb| |docker_coidb|

   :versions:
      
      

      ``0.4.8-0``,  ``0.4.7-0``,  ``0.4.6-0``,  ``0.4.5-0``,  ``0.4.3-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.3-0``

      

   
   :depends on biopython: 
   :depends on importlib_resources: 
   :depends on pandas: 
   :depends on python: ``>=3.8``
   :depends on seqkit: 
   :depends on snakemake: 
   :depends on tqdm: 
   :depends on unzip: 
   :depends on vsearch: 

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

    pixi global install coidb

to add into an existing workspace instead, run::

    pixi add coidb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install coidb

Alternatively, to install into a new environment, run::

    conda create -n envname coidb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/coidb:<tag>

(see `coidb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_coidb| image:: https://img.shields.io/conda/dn/bioconda/coidb.svg?style=flat
   :target: https://anaconda.org/bioconda/coidb
   :alt:   (downloads)
.. |docker_coidb| image:: https://quay.io/repository/biocontainers/coidb/status
   :target: https://quay.io/repository/biocontainers/coidb
.. _`coidb/tags`: https://quay.io/repository/biocontainers/coidb?tab=tags


.. raw:: html

    <script>
        var package = "coidb";
        var versions = ["0.4.8","0.4.7","0.4.6","0.4.5","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/coidb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/coidb/README.html