:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sankoff'
.. highlight: bash

sankoff
=======

.. conda:recipe:: sankoff
   :replaces_section_title:
   :noindex:

   Fast implementation of sankoff algorithm on phylogeny

   :homepage: https://github.com/hzi-bifo/sankoff
   :license: GPL / GPL 3.0
   :recipe: /`sankoff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sankoff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sankoff/meta.yaml>`_

   


.. conda:package:: sankoff

   |downloads_sankoff| |docker_sankoff|

   :versions:
      
      

      ``0.2-0``,  ``0.1-0``

      

   
   :depends boost: ``>=1.74.0,<1.74.1.0a0``
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends tbb: ``>=2021.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sankoff

   and update with::

      conda update sankoff

   or use the docker container::

      docker pull quay.io/biocontainers/sankoff:<tag>

   (see `sankoff/tags`_ for valid values for ``<tag>``)


.. |downloads_sankoff| image:: https://img.shields.io/conda/dn/bioconda/sankoff.svg?style=flat
   :target: https://anaconda.org/bioconda/sankoff
   :alt:   (downloads)
.. |docker_sankoff| image:: https://quay.io/repository/biocontainers/sankoff/status
   :target: https://quay.io/repository/biocontainers/sankoff
.. _`sankoff/tags`: https://quay.io/repository/biocontainers/sankoff?tab=tags


.. raw:: html

    <script>
        var package = "sankoff";
        var versions = ["0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sankoff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sankoff/README.html