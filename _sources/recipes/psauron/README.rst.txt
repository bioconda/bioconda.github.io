:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psauron'
.. highlight: bash

psauron
=======

.. conda:recipe:: psauron
   :replaces_section_title:
   :noindex:

   PSAURON\: a machine learning model for rapid assessment of protein coding gene annotation

   :homepage: https://github.com/salzberg-lab/PSAURON
   :license: MIT / MIT License
   :recipe: /`psauron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psauron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psauron/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqae189`

   


.. conda:package:: psauron

   |downloads_psauron| |docker_psauron|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.6-0``

      

   
   :depends on numpy: ``>=1.24.4,<2``
   :depends on pandas: 
   :depends on python: ``>=3.9,<3.13``
   :depends on pytorch: ``>=2.1.2``
   :depends on scipy: ``>=1.10.1``
   :depends on setuptools: 
   :depends on torchaudio: ``>=2.1.2``
   :depends on torchvision: ``>=0.16.2``
   :depends on tqdm: ``>=4.66.1``
   :depends on typing_extensions: ``>=4.9.0``

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

    pixi global install psauron

to add into an existing workspace instead, run::

    pixi add psauron

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install psauron

Alternatively, to install into a new environment, run::

    conda create -n envname psauron

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/psauron:<tag>

(see `psauron/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_psauron| image:: https://img.shields.io/conda/dn/bioconda/psauron.svg?style=flat
   :target: https://anaconda.org/bioconda/psauron
   :alt:   (downloads)
.. |docker_psauron| image:: https://quay.io/repository/biocontainers/psauron/status
   :target: https://quay.io/repository/biocontainers/psauron
.. _`psauron/tags`: https://quay.io/repository/biocontainers/psauron?tab=tags


.. raw:: html

    <script>
        var package = "psauron";
        var versions = ["1.1.0","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psauron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psauron/README.html