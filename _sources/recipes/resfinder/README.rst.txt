:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'resfinder'
.. highlight: bash

resfinder
=========

.. conda:recipe:: resfinder
   :replaces_section_title:
   :noindex:

   ResFinder identifies acquired antimicrobial resistance genes in total or partial sequenced isolates of bacteria.

   :homepage: https://bitbucket.org/genomicepidemiology/resfinder
   :license: APACHE / Apache-2.0
   :recipe: /`resfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/resfinder/meta.yaml>`_
   :links: doi: :doi:`10.1093/jac/dkaa345`

   


.. conda:package:: resfinder

   |downloads_resfinder| |docker_resfinder|

   :versions:
      
      

      ``4.4.2-0``,  ``4.1.11-0``

      

   
   :depends biopython: ``>=1.79``
   :depends blast: ``>=2.8.1``
   :depends cgecore: ``1.5.6``
   :depends cgelib: ``>=0.7.3``
   :depends kma: 
   :depends pandas: ``>=1.4.2``
   :depends python: ``>=3.8``
   :depends python-dateutil: 
   :depends tabulate: ``>=0.8.9``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install resfinder

   and update with::

      mamba update resfinder

  To create a new environment, run::

      mamba create --name myenvname resfinder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/resfinder:<tag>

   (see `resfinder/tags`_ for valid values for ``<tag>``)


.. |downloads_resfinder| image:: https://img.shields.io/conda/dn/bioconda/resfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/resfinder
   :alt:   (downloads)
.. |docker_resfinder| image:: https://quay.io/repository/biocontainers/resfinder/status
   :target: https://quay.io/repository/biocontainers/resfinder
.. _`resfinder/tags`: https://quay.io/repository/biocontainers/resfinder?tab=tags


.. raw:: html

    <script>
        var package = "resfinder";
        var versions = ["4.4.2","4.1.11"];
    </script>





Notes
-----
ResFinder requires databases that can be downloaded with download\-db.sh.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/resfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/resfinder/README.html