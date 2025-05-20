:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longbow'
.. highlight: bash

longbow
=======

.. conda:recipe:: longbow
   :replaces_section_title:
   :noindex:

   A Python program for nanopore sequencing basecalling configuration prediction

   :homepage: https://github.com/JMencius/longbow
   :license: GPL-3.0-or-later
   :recipe: /`longbow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longbow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longbow/meta.yaml>`_

   


.. conda:package:: longbow

   |downloads_longbow| |docker_longbow|

   :versions:
      
      

      ``2.3.1-0``,  ``2.3.0-0``

      

   
   :depends numpy: ``>=1.21.6``
   :depends psutil: 
   :depends pyfastx: ``>=2.0.2``
   :depends pytest: 
   :depends python: ``>=3.7``
   :depends statsmodels: ``>=0.13.5``
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

      mamba install longbow

   and update with::

      mamba update longbow

  To create a new environment, run::

      mamba create --name myenvname longbow

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/longbow:<tag>

   (see `longbow/tags`_ for valid values for ``<tag>``)


.. |downloads_longbow| image:: https://img.shields.io/conda/dn/bioconda/longbow.svg?style=flat
   :target: https://anaconda.org/bioconda/longbow
   :alt:   (downloads)
.. |docker_longbow| image:: https://quay.io/repository/biocontainers/longbow/status
   :target: https://quay.io/repository/biocontainers/longbow
.. _`longbow/tags`: https://quay.io/repository/biocontainers/longbow?tab=tags


.. raw:: html

    <script>
        var package = "longbow";
        var versions = ["2.3.1","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longbow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longbow/README.html