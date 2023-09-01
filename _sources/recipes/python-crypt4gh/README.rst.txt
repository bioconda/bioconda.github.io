:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-crypt4gh'
.. highlight: bash

python-crypt4gh
===============

.. conda:recipe:: python-crypt4gh
   :replaces_section_title:
   :noindex:

   GA4GH cryptographic tools

   :homepage: https://github.com/EGA-archive/crypt4gh
   :license: APACHE / Apache-2.0
   :recipe: /`python-crypt4gh <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-crypt4gh>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-crypt4gh/meta.yaml>`_

   


.. conda:package:: python-crypt4gh

   |downloads_python-crypt4gh| |docker_python-crypt4gh|

   :versions:
      
      

      ``1.6-0``,  ``1.5-0``

      

   
   :depends bcrypt: 
   :depends cryptography: 
   :depends docopt: 
   :depends pynacl: 
   :depends python: ``>=3``
   :depends pyyaml: 
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

      mamba install python-crypt4gh

   and update with::

      mamba update python-crypt4gh

  To create a new environment, run::

      mamba create --name myenvname python-crypt4gh

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/python-crypt4gh:<tag>

   (see `python-crypt4gh/tags`_ for valid values for ``<tag>``)


.. |downloads_python-crypt4gh| image:: https://img.shields.io/conda/dn/bioconda/python-crypt4gh.svg?style=flat
   :target: https://anaconda.org/bioconda/python-crypt4gh
   :alt:   (downloads)
.. |docker_python-crypt4gh| image:: https://quay.io/repository/biocontainers/python-crypt4gh/status
   :target: https://quay.io/repository/biocontainers/python-crypt4gh
.. _`python-crypt4gh/tags`: https://quay.io/repository/biocontainers/python-crypt4gh?tab=tags


.. raw:: html

    <script>
        var package = "python-crypt4gh";
        var versions = ["1.6","1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-crypt4gh/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-crypt4gh/README.html