:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pedesigner'
.. highlight: bash

pedesigner
==========

.. conda:recipe:: pedesigner
   :replaces_section_title:
   :noindex:

   A tool for prime\-editing guideRNA \(pegRNA\) design

   :homepage: https://github.com/VeredKunik/pedesigner
   :license: GPL / GPL-3.0-only
   :recipe: /`pedesigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pedesigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pedesigner/meta.yaml>`_

   


.. conda:package:: pedesigner

   |downloads_pedesigner| |docker_pedesigner|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends cas-offinder: 
   :depends python: ``>=3.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pedesigner

   and update with::

      conda update pedesigner

   or use the docker container::

      docker pull quay.io/biocontainers/pedesigner:<tag>

   (see `pedesigner/tags`_ for valid values for ``<tag>``)


.. |downloads_pedesigner| image:: https://img.shields.io/conda/dn/bioconda/pedesigner.svg?style=flat
   :target: https://anaconda.org/bioconda/pedesigner
   :alt:   (downloads)
.. |docker_pedesigner| image:: https://quay.io/repository/biocontainers/pedesigner/status
   :target: https://quay.io/repository/biocontainers/pedesigner
.. _`pedesigner/tags`: https://quay.io/repository/biocontainers/pedesigner?tab=tags


.. raw:: html

    <script>
        var package = "pedesigner";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pedesigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pedesigner/README.html