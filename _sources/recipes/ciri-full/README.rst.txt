:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ciri-full'
.. highlight: bash

ciri-full
=========

.. conda:recipe:: ciri-full
   :replaces_section_title:
   :noindex:

   Full length circRNA reconstruction and quantification using BSJ and reverse overlap \(RO\) features.

   :homepage: https://ciri-cookbook.readthedocs.io/en/latest/CIRI-full.html
   :developer docs: https://github.com/bioinfo-biols/CIRI-full
   :license: Unknown
   :recipe: /`ciri-full <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ciri-full>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ciri-full/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13073-019-0614-1`

   


.. conda:package:: ciri-full

   |downloads_ciri-full| |docker_ciri-full|

   :versions:
      
      

      ``2.1.2-1``,  ``2.1.2-0``

      

   
   :depends on bwa: 
   :depends on openjdk: 
   :depends on perl: 

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

    pixi global install ciri-full

to add into an existing workspace instead, run::

    pixi add ciri-full

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ciri-full

Alternatively, to install into a new environment, run::

    conda create -n envname ciri-full

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ciri-full:<tag>

(see `ciri-full/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ciri-full| image:: https://img.shields.io/conda/dn/bioconda/ciri-full.svg?style=flat
   :target: https://anaconda.org/bioconda/ciri-full
   :alt:   (downloads)
.. |docker_ciri-full| image:: https://quay.io/repository/biocontainers/ciri-full/status
   :target: https://quay.io/repository/biocontainers/ciri-full
.. _`ciri-full/tags`: https://quay.io/repository/biocontainers/ciri-full?tab=tags


.. raw:: html

    <script>
        var package = "ciri-full";
        var versions = ["2.1.2","2.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ciri-full/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ciri-full/README.html