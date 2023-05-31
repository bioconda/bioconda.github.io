:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bactopia-py'
.. highlight: bash

bactopia-py
===========

.. conda:recipe:: bactopia-py
   :replaces_section_title:
   :noindex:

   A Python package for working with Bactopia

   :homepage: https://bactopia.github.io/
   :license: MIT
   :recipe: /`bactopia-py <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-py>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bactopia-py/meta.yaml>`_

   


.. conda:package:: bactopia-py

   |downloads_bactopia-py| |docker_bactopia-py|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends executor: 
   :depends nextflow: ``>=21.10.0``
   :depends pandas: ``>=1.5.3,<2.0.0``
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends requests: 
   :depends rich-click: ``>=1.6.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bactopia-py

   and update with::

      conda update bactopia-py

   or use the docker container::

      docker pull quay.io/biocontainers/bactopia-py:<tag>

   (see `bactopia-py/tags`_ for valid values for ``<tag>``)


.. |downloads_bactopia-py| image:: https://img.shields.io/conda/dn/bioconda/bactopia-py.svg?style=flat
   :target: https://anaconda.org/bioconda/bactopia-py
   :alt:   (downloads)
.. |docker_bactopia-py| image:: https://quay.io/repository/biocontainers/bactopia-py/status
   :target: https://quay.io/repository/biocontainers/bactopia-py
.. _`bactopia-py/tags`: https://quay.io/repository/biocontainers/bactopia-py?tab=tags


.. raw:: html

    <script>
        var package = "bactopia-py";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bactopia-py/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bactopia-py/README.html