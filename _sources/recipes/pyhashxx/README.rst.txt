:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyhashxx'
.. highlight: bash

pyhashxx
========

.. conda:recipe:: pyhashxx
   :replaces_section_title:
   :noindex:

   Python wrapper for xxHash algorithm

   :homepage: http://github.com/ewencp/pyhashxx
   :license: BSD / BSD
   :recipe: /`pyhashxx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhashxx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyhashxx/meta.yaml>`_

   


.. conda:package:: pyhashxx

   |downloads_pyhashxx| |docker_pyhashxx|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends python: ``>=2.7,<2.8.0a0``
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

      mamba install pyhashxx

   and update with::

      mamba update pyhashxx

  To create a new environment, run::

      mamba create --name myenvname pyhashxx

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyhashxx:<tag>

   (see `pyhashxx/tags`_ for valid values for ``<tag>``)


.. |downloads_pyhashxx| image:: https://img.shields.io/conda/dn/bioconda/pyhashxx.svg?style=flat
   :target: https://anaconda.org/bioconda/pyhashxx
   :alt:   (downloads)
.. |docker_pyhashxx| image:: https://quay.io/repository/biocontainers/pyhashxx/status
   :target: https://quay.io/repository/biocontainers/pyhashxx
.. _`pyhashxx/tags`: https://quay.io/repository/biocontainers/pyhashxx?tab=tags


.. raw:: html

    <script>
        var package = "pyhashxx";
        var versions = ["0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyhashxx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyhashxx/README.html