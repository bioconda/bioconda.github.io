:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parafly'
.. highlight: bash

parafly
=======

.. conda:recipe:: parafly
   :replaces_section_title:
   :noindex:

   Given a file containing a list of unix commands\, multithreading is used to process the commands in parallel on a single server. Success\/failure is captured\, and failed commands are retained and reported.

   :homepage: http://parafly.sourceforge.net/
   :license: The Broad Institute (own license thingy)
   :recipe: /`parafly <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parafly>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parafly/meta.yaml>`_

   


.. conda:package:: parafly

   |downloads_parafly| |docker_parafly|

   :versions:
      
      

      ``r2013_01_21-1``,  ``r2013_01_21-0``

      

   
   :depends libgcc: 
   :depends zlib: ``1.2.11*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install parafly

   and update with::

      conda update parafly

   or use the docker container::

      docker pull quay.io/biocontainers/parafly:<tag>

   (see `parafly/tags`_ for valid values for ``<tag>``)


.. |downloads_parafly| image:: https://img.shields.io/conda/dn/bioconda/parafly.svg?style=flat
   :target: https://anaconda.org/bioconda/parafly
   :alt:   (downloads)
.. |docker_parafly| image:: https://quay.io/repository/biocontainers/parafly/status
   :target: https://quay.io/repository/biocontainers/parafly
.. _`parafly/tags`: https://quay.io/repository/biocontainers/parafly?tab=tags


.. raw:: html

    <script>
        var package = "parafly";
        var versions = ["r2013_01_21","r2013_01_21"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parafly/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parafly/README.html