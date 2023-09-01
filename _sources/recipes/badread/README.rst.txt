:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'badread'
.. highlight: bash

badread
=======

.. conda:recipe:: badread
   :replaces_section_title:
   :noindex:

   A long read simulator that can imitate many types of read problems

   :homepage: https://github.com/rrwick/Badread
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`badread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/badread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/badread/meta.yaml>`_

   


.. conda:package:: badread

   |downloads_badread| |docker_badread|

   :versions:
      
      

      ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.0-0``,  ``0.1.5-0``

      

   
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pip: 
   :depends python: ``>=3.6``
   :depends python-edlib: 
   :depends scipy: 
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

      mamba install badread

   and update with::

      mamba update badread

  To create a new environment, run::

      mamba create --name myenvname badread

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/badread:<tag>

   (see `badread/tags`_ for valid values for ``<tag>``)


.. |downloads_badread| image:: https://img.shields.io/conda/dn/bioconda/badread.svg?style=flat
   :target: https://anaconda.org/bioconda/badread
   :alt:   (downloads)
.. |docker_badread| image:: https://quay.io/repository/biocontainers/badread/status
   :target: https://quay.io/repository/biocontainers/badread
.. _`badread/tags`: https://quay.io/repository/biocontainers/badread?tab=tags


.. raw:: html

    <script>
        var package = "badread";
        var versions = ["0.4.0","0.4.0","0.3.0","0.2.0","0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/badread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/badread/README.html