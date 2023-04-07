:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'paraphase'
.. highlight: bash

paraphase
=========

.. conda:recipe:: paraphase
   :replaces_section_title:
   :noindex:

   SMN1\/SMN2 caller for PacBio HiFi Data

   :homepage: https://github.com/PacificBiosciences/paraphase
   :license: BSD-3-Clause-Clear
   :recipe: /`paraphase <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraphase>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/paraphase/meta.yaml>`_

   


.. conda:package:: paraphase

   |downloads_paraphase| |docker_paraphase|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.0-0``,  ``1.1.3-0``

      

   
   :depends matplotlib-base: 
   :depends networkx: ``>=2.8.2``
   :depends numpy: ``>=1.16``
   :depends pysam: ``>=0.15.3``
   :depends python: ``>=3.8``
   :depends pyyaml: 
   :depends scipy: ``>=1.2``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install paraphase

   and update with::

      conda update paraphase

   or use the docker container::

      docker pull quay.io/biocontainers/paraphase:<tag>

   (see `paraphase/tags`_ for valid values for ``<tag>``)


.. |downloads_paraphase| image:: https://img.shields.io/conda/dn/bioconda/paraphase.svg?style=flat
   :target: https://anaconda.org/bioconda/paraphase
   :alt:   (downloads)
.. |docker_paraphase| image:: https://quay.io/repository/biocontainers/paraphase/status
   :target: https://quay.io/repository/biocontainers/paraphase
.. _`paraphase/tags`: https://quay.io/repository/biocontainers/paraphase?tab=tags


.. raw:: html

    <script>
        var package = "paraphase";
        var versions = ["2.1.0","2.0.0","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/paraphase/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/paraphase/README.html