:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pretextsnapshot'
.. highlight: bash

pretextsnapshot
===============

.. conda:recipe:: pretextsnapshot
   :replaces_section_title:
   :noindex:

   Commandline image generator for Pretext Hi\-C genome contact maps.

   :homepage: https://github.com/wtsi-hpag/PretextSnapshot
   :license: MIT / MIT
   :recipe: /`pretextsnapshot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextsnapshot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextsnapshot/meta.yaml>`_

   This is a tool for generating images \(png\, bmp or jpeg\) of Hi\-C contact maps in the Pretext format. See https\:\/\/github.com\/wtsi\-hpag\/PretextMap for how to generate Pretext contact maps\, or search for pretextmap on bioconda.


.. conda:package:: pretextsnapshot

   |downloads_pretextsnapshot| |docker_pretextsnapshot|

   :versions:
      
      

      ``0.0.4-2``,  ``0.0.4-1``,  ``0.0.4-0``,  ``0.0.3-1``,  ``0.0.3-0``,  ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pretextsnapshot

   and update with::

      conda update pretextsnapshot

   or use the docker container::

      docker pull quay.io/biocontainers/pretextsnapshot:<tag>

   (see `pretextsnapshot/tags`_ for valid values for ``<tag>``)


.. |downloads_pretextsnapshot| image:: https://img.shields.io/conda/dn/bioconda/pretextsnapshot.svg?style=flat
   :target: https://anaconda.org/bioconda/pretextsnapshot
   :alt:   (downloads)
.. |docker_pretextsnapshot| image:: https://quay.io/repository/biocontainers/pretextsnapshot/status
   :target: https://quay.io/repository/biocontainers/pretextsnapshot
.. _`pretextsnapshot/tags`: https://quay.io/repository/biocontainers/pretextsnapshot?tab=tags


.. raw:: html

    <script>
        var package = "pretextsnapshot";
        var versions = ["0.0.4","0.0.4","0.0.4","0.0.3","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pretextsnapshot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pretextsnapshot/README.html