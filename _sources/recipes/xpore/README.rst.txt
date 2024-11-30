:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xpore'
.. highlight: bash

xpore
=====

.. conda:recipe:: xpore
   :replaces_section_title:
   :noindex:

   xpore is a python package for Nanopore data analysis of differential RNA modifications.

   :homepage: https://github.com/GoekeLab/xpore
   :documentation: https://xpore.readthedocs.io/en/latest/
   
   :developer docs: https://github.com/GoekeLab/xpore.git
   :license: MIT / MIT
   :recipe: /`xpore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xpore/meta.yaml>`_
   :links: doi: :doi:`10.1101/2020.06.18.160010`, biotools: :biotools:`xpore`

   


.. conda:package:: xpore

   |downloads_xpore| |docker_xpore|

   :versions:
      
      

      ``2.1-0``,  ``2.0-0``,  ``1.0-0``,  ``0.5.6-0``

      

   
   :depends h5py: ``>=2.10.0``
   :depends numpy: ``>=1.18.0``
   :depends pandas: ``>=0.25.3``
   :depends pyensembl: ``>=1.8.5``
   :depends python: 
   :depends pyyaml: 
   :depends scipy: ``>=1.4.1``
   :depends ujson: ``>=4.0.1``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install xpore

   and update with::

      mamba update xpore

  To create a new environment, run::

      mamba create --name myenvname xpore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xpore:<tag>

   (see `xpore/tags`_ for valid values for ``<tag>``)


.. |downloads_xpore| image:: https://img.shields.io/conda/dn/bioconda/xpore.svg?style=flat
   :target: https://anaconda.org/bioconda/xpore
   :alt:   (downloads)
.. |docker_xpore| image:: https://quay.io/repository/biocontainers/xpore/status
   :target: https://quay.io/repository/biocontainers/xpore
.. _`xpore/tags`: https://quay.io/repository/biocontainers/xpore?tab=tags


.. raw:: html

    <script>
        var package = "xpore";
        var versions = ["2.1","2.0","1.0","0.5.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xpore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xpore/README.html