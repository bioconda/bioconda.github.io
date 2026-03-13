:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'domainator'
.. highlight: bash

domainator
==========

.. conda:recipe:: domainator
   :replaces_section_title:
   :noindex:

   A flexible suite for domain\-based gene neighborhood and protein analysis.

   :homepage: https://github.com/nebiolabs/domainator
   :documentation: https://github.com/nebiolabs/domainator/README.md
   
   :license: MIT / MIT
   :recipe: /`domainator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domainator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/domainator/meta.yaml>`_

   


.. conda:package:: domainator

   |downloads_domainator| |docker_domainator|

   :versions:
      
      

      ``0.8.1-0``,  ``0.8.0-0``

      

   
   :depends on bashplotlib: ``>=0.6.5``
   :depends on cd-hit: ``>=4.8.1,<5.0``
   :depends on diamond: ``>=2.0.0,<3.0``
   :depends on flask: ``>=2.3``
   :depends on h5py: ``>=3.9.0``
   :depends on hmmer: ``>=3.3.2,<4.0``
   :depends on jsonargparse: ``>=4.18.0``
   :depends on jsonschema: ``>=4.0``
   :depends on pandas: ``>=2.1.0``
   :depends on psutil: ``>=5.9.6``
   :depends on pyhmmer: ``>=0.12.0,<0.13.0``
   :depends on pyrodigal: ``>=3.0.1``
   :depends on python: ``>=3.10,<3.14``
   :depends on requests: ``>=2.31.0``
   :depends on scipy: ``>=1.11.2``
   :depends on seaborn: ``>=0.13.0``
   :depends on tqdm: ``>=4.65.0``
   :depends on umap-learn: ``>=0.5.4``
   :depends on usearch: ``>=12.0_beta,<13.0``
   :depends on werkzeug: ``>=2.3``

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

    pixi global install domainator

to add into an existing workspace instead, run::

    pixi add domainator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install domainator

Alternatively, to install into a new environment, run::

    conda create -n envname domainator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/domainator:<tag>

(see `domainator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_domainator| image:: https://img.shields.io/conda/dn/bioconda/domainator.svg?style=flat
   :target: https://anaconda.org/bioconda/domainator
   :alt:   (downloads)
.. |docker_domainator| image:: https://quay.io/repository/biocontainers/domainator/status
   :target: https://quay.io/repository/biocontainers/domainator
.. _`domainator/tags`: https://quay.io/repository/biocontainers/domainator?tab=tags


.. raw:: html

    <script>
        var package = "domainator";
        var versions = ["0.8.1","0.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/domainator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/domainator/README.html