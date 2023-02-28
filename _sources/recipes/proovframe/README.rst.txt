:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proovframe'
.. highlight: bash

proovframe
==========

.. conda:recipe:: proovframe
   :replaces_section_title:
   :noindex:

   frame\-shift correction for long read \(meta\)genomics

   :homepage: https://github.com/thackl/proovframe
   :license: MIT / MIT
   :recipe: /`proovframe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proovframe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proovframe/meta.yaml>`_

   


.. conda:package:: proovframe

   |downloads_proovframe| |docker_proovframe|

   :versions:
      
      

      ``0.9.7-0``

      

   
   :depends diamond: ``>=2.0.3``
   :depends minimap2: 
   :depends perl: 
   :depends perl-data-dumper: 
   :depends perl-file-path: 
   :depends perl-findbin: 
   :depends perl-getopt-long: 
   :depends perl-list-util: 
   :depends perl-text-wrap: 
   :depends seqkit: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proovframe

   and update with::

      conda update proovframe

   or use the docker container::

      docker pull quay.io/biocontainers/proovframe:<tag>

   (see `proovframe/tags`_ for valid values for ``<tag>``)


.. |downloads_proovframe| image:: https://img.shields.io/conda/dn/bioconda/proovframe.svg?style=flat
   :target: https://anaconda.org/bioconda/proovframe
   :alt:   (downloads)
.. |docker_proovframe| image:: https://quay.io/repository/biocontainers/proovframe/status
   :target: https://quay.io/repository/biocontainers/proovframe
.. _`proovframe/tags`: https://quay.io/repository/biocontainers/proovframe?tab=tags


.. raw:: html

    <script>
        var package = "proovframe";
        var versions = ["0.9.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proovframe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proovframe/README.html