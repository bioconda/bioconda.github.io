:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snap'
.. highlight: bash

snap
====

.. conda:recipe:: snap
   :replaces_section_title:
   :noindex:

   Semi\-HMM\-based Nucleic Acid Parser \-\- gene prediction tool

   :homepage: http://korflab.ucdavis.edu/software.html
   :license: MIT
   :recipe: /`snap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snap/meta.yaml>`_

   


.. conda:package:: snap

   |downloads_snap| |docker_snap|

   :versions:
      
      

      ``2013_11_29-3``,  ``2013_11_29-2``,  ``2013_11_29-1``,  ``2013_11_29-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends perl: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install snap

   and update with::

      conda update snap

   or use the docker container::

      docker pull quay.io/biocontainers/snap:<tag>

   (see `snap/tags`_ for valid values for ``<tag>``)


.. |downloads_snap| image:: https://img.shields.io/conda/dn/bioconda/snap.svg?style=flat
   :target: https://anaconda.org/bioconda/snap
   :alt:   (downloads)
.. |docker_snap| image:: https://quay.io/repository/biocontainers/snap/status
   :target: https://quay.io/repository/biocontainers/snap
.. _`snap/tags`: https://quay.io/repository/biocontainers/snap?tab=tags


.. raw:: html

    <script>
        var package = "snap";
        var versions = ["2013_11_29","2013_11_29","2013_11_29","2013_11_29"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snap/README.html