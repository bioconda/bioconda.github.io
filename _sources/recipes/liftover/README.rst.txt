:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liftover'
.. highlight: bash

liftover
========

.. conda:recipe:: liftover
   :replaces_section_title:
   :noindex:

   A Python package for converting point coordinates between genome assemblies\, inspired by pyliftover.

   :homepage: https://github.com/jeremymcrae/liftover
   :developer docs: https://pypi.org/project/liftover/
   :license: MIT
   :recipe: /`liftover <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liftover>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liftover/meta.yaml>`_

   


.. conda:package:: liftover

   |downloads_liftover| |docker_liftover|

   :versions:
      
      

      ``1.1.16-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends urllib3: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install liftover

   and update with::

      conda update liftover

   or use the docker container::

      docker pull quay.io/biocontainers/liftover:<tag>

   (see `liftover/tags`_ for valid values for ``<tag>``)


.. |downloads_liftover| image:: https://img.shields.io/conda/dn/bioconda/liftover.svg?style=flat
   :target: https://anaconda.org/bioconda/liftover
   :alt:   (downloads)
.. |docker_liftover| image:: https://quay.io/repository/biocontainers/liftover/status
   :target: https://quay.io/repository/biocontainers/liftover
.. _`liftover/tags`: https://quay.io/repository/biocontainers/liftover?tab=tags


.. raw:: html

    <script>
        var package = "liftover";
        var versions = ["1.1.16"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liftover/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liftover/README.html