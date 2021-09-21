:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'glnexus'
.. highlight: bash

glnexus
=======

.. conda:recipe:: glnexus
   :replaces_section_title:
   :noindex:

   scalable gVCF merging and joint variant calling for population sequencing projects.

   :homepage: https://github.com/dnanexus-rnd/GLnexus
   :license: Apache License 2.0
   :recipe: /`glnexus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glnexus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/glnexus/meta.yaml>`_

   


.. conda:package:: glnexus

   |downloads_glnexus| |docker_glnexus|

   :versions:
      
      

      ``1.4.1-0``

      

   
   :depends glib: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libglib: ``>=2.68.4,<3.0a0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install glnexus

   and update with::

      conda update glnexus

   or use the docker container::

      docker pull quay.io/biocontainers/glnexus:<tag>

   (see `glnexus/tags`_ for valid values for ``<tag>``)


.. |downloads_glnexus| image:: https://img.shields.io/conda/dn/bioconda/glnexus.svg?style=flat
   :target: https://anaconda.org/bioconda/glnexus
   :alt:   (downloads)
.. |docker_glnexus| image:: https://quay.io/repository/biocontainers/glnexus/status
   :target: https://quay.io/repository/biocontainers/glnexus
.. _`glnexus/tags`: https://quay.io/repository/biocontainers/glnexus?tab=tags


.. raw:: html

    <script>
        var package = "glnexus";
        var versions = ["1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/glnexus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/glnexus/README.html