:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigsi'
.. highlight: bash

bigsi
=====

.. conda:recipe:: bigsi
   :replaces_section_title:
   :noindex:

   BItsliced Genomic Signature Index \[BIGSI\]

   :homepage: https://github.com/Phelimb/BIGSI
   :license: MIT / LICENSE
   :recipe: /`bigsi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigsi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigsi/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-018-0010-1`

   


.. conda:package:: bigsi

   |downloads_bigsi| |docker_bigsi|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends on biopython: 
   :depends on bitarray: 
   :depends on bsddb3: 
   :depends on cython: 
   :depends on hug: 
   :depends on humanfriendly: 
   :depends on libdb: 
   :depends on mmh3: 
   :depends on numpy: 
   :depends on python: ``>=3``
   :depends on pyyaml: 
   :depends on redis-py: 

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

    pixi global install bigsi

to add into an existing workspace instead, run::

    pixi add bigsi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bigsi

Alternatively, to install into a new environment, run::

    conda create -n envname bigsi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bigsi:<tag>

(see `bigsi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bigsi| image:: https://img.shields.io/conda/dn/bioconda/bigsi.svg?style=flat
   :target: https://anaconda.org/bioconda/bigsi
   :alt:   (downloads)
.. |docker_bigsi| image:: https://quay.io/repository/biocontainers/bigsi/status
   :target: https://quay.io/repository/biocontainers/bigsi
.. _`bigsi/tags`: https://quay.io/repository/biocontainers/bigsi?tab=tags


.. raw:: html

    <script>
        var package = "bigsi";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigsi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigsi/README.html