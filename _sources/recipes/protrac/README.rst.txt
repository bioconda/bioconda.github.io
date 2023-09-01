:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protrac'
.. highlight: bash

protrac
=======

.. conda:recipe:: protrac
   :replaces_section_title:
   :noindex:

   piRNA detection

   :homepage: http://www.smallrnagroup.uni-mainz.de/software.html
   :license: CC BY-NC 2.0
   :recipe: /`protrac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protrac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protrac/meta.yaml>`_

   


.. conda:package:: protrac

   |downloads_protrac| |docker_protrac|

   :versions:
      
      

      ``2.4.2-3``,  ``2.4.2-2``,  ``2.4.2-1``,  ``2.4.2-0``,  ``2.3.1-1``,  ``2.3.1-0``,  ``2.1-1``,  ``2.1-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-gd: 
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

      mamba install protrac

   and update with::

      mamba update protrac

  To create a new environment, run::

      mamba create --name myenvname protrac

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/protrac:<tag>

   (see `protrac/tags`_ for valid values for ``<tag>``)


.. |downloads_protrac| image:: https://img.shields.io/conda/dn/bioconda/protrac.svg?style=flat
   :target: https://anaconda.org/bioconda/protrac
   :alt:   (downloads)
.. |docker_protrac| image:: https://quay.io/repository/biocontainers/protrac/status
   :target: https://quay.io/repository/biocontainers/protrac
.. _`protrac/tags`: https://quay.io/repository/biocontainers/protrac?tab=tags


.. raw:: html

    <script>
        var package = "protrac";
        var versions = ["2.4.2","2.4.2","2.4.2","2.4.2","2.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protrac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protrac/README.html