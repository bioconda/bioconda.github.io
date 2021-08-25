:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'express'
.. highlight: bash

express
=======

.. conda:recipe:: express
   :replaces_section_title:
   :noindex:

   eXpress is a streaming DNA\/RNA sequence quantification tool.

   :homepage: http://bio.math.berkeley.edu/eXpress/
   :license: Artistic License 2.0
   :recipe: /`express <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/express>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/express/meta.yaml>`_

   


.. conda:package:: express

   |downloads_express| |docker_express|

   :versions:
      
      

      ``1.5.1-3``,  ``1.5.1-2``,  ``1.5.1-1``,  ``1.5.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install express

   and update with::

      conda update express

   or use the docker container::

      docker pull quay.io/biocontainers/express:<tag>

   (see `express/tags`_ for valid values for ``<tag>``)


.. |downloads_express| image:: https://img.shields.io/conda/dn/bioconda/express.svg?style=flat
   :target: https://anaconda.org/bioconda/express
   :alt:   (downloads)
.. |docker_express| image:: https://quay.io/repository/biocontainers/express/status
   :target: https://quay.io/repository/biocontainers/express
.. _`express/tags`: https://quay.io/repository/biocontainers/express?tab=tags


.. raw:: html

    <script>
        var package = "express";
        var versions = ["1.5.1","1.5.1","1.5.1","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/express/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/express/README.html