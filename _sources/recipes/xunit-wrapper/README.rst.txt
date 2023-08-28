:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xunit-wrapper'
.. highlight: bash

xunit-wrapper
=============

.. conda:recipe:: xunit-wrapper
   :replaces_section_title:
   :noindex:

   Wrap python functions with a decorator to handle building XUnit reports

   :homepage: https://github.com/TAMU-CPT/xunit-python-decorator
   :license: GPL3 / GNU General Public License v3 (GPLv3)
   :recipe: /`xunit-wrapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xunit-wrapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xunit-wrapper/meta.yaml>`_

   


.. conda:package:: xunit-wrapper

   |downloads_xunit-wrapper| |docker_xunit-wrapper|

   :versions:
      
      

      ``0.12-2``,  ``0.12-1``,  ``0.12-0``

      

   
   :depends future: 
   :depends junit-xml: ``1.7``
   :depends python: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install xunit-wrapper

   and update with::

      mamba update xunit-wrapper

  To create a new environment, run::

      mamba create --name myenvname xunit-wrapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xunit-wrapper:<tag>

   (see `xunit-wrapper/tags`_ for valid values for ``<tag>``)


.. |downloads_xunit-wrapper| image:: https://img.shields.io/conda/dn/bioconda/xunit-wrapper.svg?style=flat
   :target: https://anaconda.org/bioconda/xunit-wrapper
   :alt:   (downloads)
.. |docker_xunit-wrapper| image:: https://quay.io/repository/biocontainers/xunit-wrapper/status
   :target: https://quay.io/repository/biocontainers/xunit-wrapper
.. _`xunit-wrapper/tags`: https://quay.io/repository/biocontainers/xunit-wrapper?tab=tags


.. raw:: html

    <script>
        var package = "xunit-wrapper";
        var versions = ["0.12","0.12","0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xunit-wrapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xunit-wrapper/README.html