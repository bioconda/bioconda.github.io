:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pybiolib'
.. highlight: bash

pybiolib
========

.. conda:recipe:: pybiolib
   :replaces_section_title:
   :noindex:

   BioLib Python Client

   :homepage: https://github.com/biolib
   :license: MIT
   :recipe: /`pybiolib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybiolib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pybiolib/meta.yaml>`_
   :links: biotools: :biotools:`biolib`

   


.. conda:package:: pybiolib

   |downloads_pybiolib| |docker_pybiolib|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.1282-0</code>,  <code>1.1.1277-0</code>,  <code>1.1.1272-0</code>,  <code>1.1.1264-0</code>,  <code>1.1.1225-0</code>,  <code>1.1.1218-0</code>,  <code>1.1.1216-0</code>,  <code>1.1.1207-0</code>,  <code>1.1.1200-0</code>,  </span></summary>
      

      ``1.1.1282-0``,  ``1.1.1277-0``,  ``1.1.1272-0``,  ``1.1.1264-0``,  ``1.1.1225-0``,  ``1.1.1218-0``,  ``1.1.1216-0``,  ``1.1.1207-0``,  ``1.1.1200-0``,  ``1.1.1198-0``,  ``1.1.1194-0``,  ``1.1.1185-0``,  ``1.1.1172-0``,  ``1.1.1167-0``,  ``1.1.1146-0``,  ``1.1.1125-0``,  ``1.1.1121-0``,  ``1.1.1101-0``,  ``1.1.1073-0``,  ``1.1.1065-0``,  ``1.1.1044-0``,  ``1.1.1029-0``,  ``1.1.1027-0``,  ``1.1.1011-0``,  ``1.1.997-0``,  ``1.1.988-0``,  ``1.1.944-0``,  ``1.1.930-0``,  ``1.1.918-0``,  ``1.1.916-0``,  ``1.1.911-0``,  ``1.1.862-0``,  ``1.1.860-0``,  ``1.1.835-0``,  ``1.1.825-0``,  ``1.1.824-0``,  ``1.1.822-0``,  ``1.1.814-0``,  ``1.1.809-0``

      
      .. raw:: html

         </details>
      

   
   :depends appdirs: ``>=1.4.3``
   :depends click: ``>=8.0.0,<8.1.0``
   :depends docker-py: ``>=5.0.3``
   :depends flask: ``>=2.0.1``
   :depends flask-cors: ``>=3.0.10``
   :depends gunicorn: ``>=20.1.0``
   :depends importlib-metadata: ``>=1.6.1``
   :depends pycryptodome: ``>=3.9.9``
   :depends pyjwt: ``>=2.3.0``
   :depends python: ``>=3.6,<4.0``
   :depends pyyaml: ``>=5.3.1``
   :depends requests: ``>=2.25.1,<2.30.0``
   :depends rich: ``>=12.4.4,<13.0.0``
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

      mamba install pybiolib

   and update with::

      mamba update pybiolib

  To create a new environment, run::

      mamba create --name myenvname pybiolib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pybiolib:<tag>

   (see `pybiolib/tags`_ for valid values for ``<tag>``)


.. |downloads_pybiolib| image:: https://img.shields.io/conda/dn/bioconda/pybiolib.svg?style=flat
   :target: https://anaconda.org/bioconda/pybiolib
   :alt:   (downloads)
.. |docker_pybiolib| image:: https://quay.io/repository/biocontainers/pybiolib/status
   :target: https://quay.io/repository/biocontainers/pybiolib
.. _`pybiolib/tags`: https://quay.io/repository/biocontainers/pybiolib?tab=tags


.. raw:: html

    <script>
        var package = "pybiolib";
        var versions = ["1.1.1282","1.1.1277","1.1.1272","1.1.1264","1.1.1225"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pybiolib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pybiolib/README.html