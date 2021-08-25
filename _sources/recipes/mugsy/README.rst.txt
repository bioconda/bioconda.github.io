:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mugsy'
.. highlight: bash

mugsy
=====

.. conda:recipe:: mugsy
   :replaces_section_title:
   :noindex:

   Mugsy is a multiple whole genome aligner.

   :homepage: http://mugsy.sourceforge.net
   :license: Artistic License 2.0
   :recipe: /`mugsy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mugsy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mugsy/meta.yaml>`_

   


.. conda:package:: mugsy

   |downloads_mugsy| |docker_mugsy|

   :versions:
      
      

      ``1.2.3-4``,  ``1.2.3-3``,  ``1.2.3-2``,  ``1.2.3-1``,  ``1.2.3-0``

      

   
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mugsy

   and update with::

      conda update mugsy

   or use the docker container::

      docker pull quay.io/biocontainers/mugsy:<tag>

   (see `mugsy/tags`_ for valid values for ``<tag>``)


.. |downloads_mugsy| image:: https://img.shields.io/conda/dn/bioconda/mugsy.svg?style=flat
   :target: https://anaconda.org/bioconda/mugsy
   :alt:   (downloads)
.. |docker_mugsy| image:: https://quay.io/repository/biocontainers/mugsy/status
   :target: https://quay.io/repository/biocontainers/mugsy
.. _`mugsy/tags`: https://quay.io/repository/biocontainers/mugsy?tab=tags


.. raw:: html

    <script>
        var package = "mugsy";
        var versions = ["1.2.3","1.2.3","1.2.3","1.2.3","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mugsy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mugsy/README.html