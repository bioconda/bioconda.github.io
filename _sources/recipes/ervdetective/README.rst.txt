:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ervdetective'
.. highlight: bash

ervdetective
============

.. conda:recipe:: ervdetective
   :replaces_section_title:
   :noindex:

   An efficient pipeline for identification and annotation of endogenous retroviruses \(ERVs\).

   :homepage: https://github.com/ZhijianZhou01/ervdetective
   :license: LGPL / LGPL-2.1-or-later
   :recipe: /`ervdetective <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ervdetective>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ervdetective/meta.yaml>`_

   


.. conda:package:: ervdetective

   |downloads_ervdetective| |docker_ervdetective|

   :versions:
      
      

      ``1.0.8-0``

      

   
   :depends biopython: ``>=1.77``
   :depends blast: ``>=2.9.0``
   :depends genometools-genometools: ``>=1.6.1``
   :depends hmmer: ``>=3.0``
   :depends psutil: ``>=5.9.1``
   :depends python: ``>=3.6``
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

      mamba install ervdetective

   and update with::

      mamba update ervdetective

  To create a new environment, run::

      mamba create --name myenvname ervdetective

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ervdetective:<tag>

   (see `ervdetective/tags`_ for valid values for ``<tag>``)


.. |downloads_ervdetective| image:: https://img.shields.io/conda/dn/bioconda/ervdetective.svg?style=flat
   :target: https://anaconda.org/bioconda/ervdetective
   :alt:   (downloads)
.. |docker_ervdetective| image:: https://quay.io/repository/biocontainers/ervdetective/status
   :target: https://quay.io/repository/biocontainers/ervdetective
.. _`ervdetective/tags`: https://quay.io/repository/biocontainers/ervdetective?tab=tags


.. raw:: html

    <script>
        var package = "ervdetective";
        var versions = ["1.0.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ervdetective/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ervdetective/README.html