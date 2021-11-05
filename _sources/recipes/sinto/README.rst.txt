:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sinto'
.. highlight: bash

sinto
=====

.. conda:recipe:: sinto
   :replaces_section_title:
   :noindex:

   sinto\: tools for single\-cell data processing

   :homepage: https://timoast.github.io/sinto/
   :license: MIT / MIT
   :recipe: /`sinto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sinto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sinto/meta.yaml>`_

   


.. conda:package:: sinto

   |downloads_sinto| |docker_sinto|

   :versions:
      
      

      ``0.7.6-0``,  ``0.7.5-0``,  ``0.7.4-0``,  ``0.7.3.1-0``

      

   
   :depends numpy: 
   :depends pysam: ``>=0.14``
   :depends python: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sinto

   and update with::

      conda update sinto

   or use the docker container::

      docker pull quay.io/biocontainers/sinto:<tag>

   (see `sinto/tags`_ for valid values for ``<tag>``)


.. |downloads_sinto| image:: https://img.shields.io/conda/dn/bioconda/sinto.svg?style=flat
   :target: https://anaconda.org/bioconda/sinto
   :alt:   (downloads)
.. |docker_sinto| image:: https://quay.io/repository/biocontainers/sinto/status
   :target: https://quay.io/repository/biocontainers/sinto
.. _`sinto/tags`: https://quay.io/repository/biocontainers/sinto?tab=tags


.. raw:: html

    <script>
        var package = "sinto";
        var versions = ["0.7.6","0.7.5","0.7.4","0.7.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sinto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sinto/README.html