:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyvcf3'
.. highlight: bash

pyvcf3
======

.. conda:recipe:: pyvcf3
   :replaces_section_title:
   :noindex:

   A Variant Call Format reader for Python

   :homepage: https://github.com/dridk/PyVCF3
   :documentation: http://pyvcf.readthedocs.org/en/latest/index.html
   
   :license: MIT
   :recipe: /`pyvcf3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyvcf3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyvcf3/meta.yaml>`_

   


.. conda:package:: pyvcf3

   |downloads_pyvcf3| |docker_pyvcf3|

   :versions:
      
      

      ``1.0.3-0``

      

   
   :depends python: ``3.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pyvcf3

   and update with::

      conda update pyvcf3

   or use the docker container::

      docker pull quay.io/biocontainers/pyvcf3:<tag>

   (see `pyvcf3/tags`_ for valid values for ``<tag>``)


.. |downloads_pyvcf3| image:: https://img.shields.io/conda/dn/bioconda/pyvcf3.svg?style=flat
   :target: https://anaconda.org/bioconda/pyvcf3
   :alt:   (downloads)
.. |docker_pyvcf3| image:: https://quay.io/repository/biocontainers/pyvcf3/status
   :target: https://quay.io/repository/biocontainers/pyvcf3
.. _`pyvcf3/tags`: https://quay.io/repository/biocontainers/pyvcf3?tab=tags


.. raw:: html

    <script>
        var package = "pyvcf3";
        var versions = ["1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyvcf3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyvcf3/README.html