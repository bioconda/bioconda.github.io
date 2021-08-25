:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ena-webin-cli'
.. highlight: bash

ena-webin-cli
=============

.. conda:recipe:: ena-webin-cli
   :replaces_section_title:
   :noindex:

   Data submissions to ENA can be made using the Webin command line submission interface \(Webin\-CLI\).

   :homepage: https://github.com/enasequence/webin-cli
   :license: Apache-2.0
   :recipe: /`ena-webin-cli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-webin-cli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ena-webin-cli/meta.yaml>`_

   


.. conda:package:: ena-webin-cli

   |downloads_ena-webin-cli| |docker_ena-webin-cli|

   :versions:
      
      

      ``4.0.0-0``,  ``3.7.0-0``

      

   
   :depends openjdk: ``>=8,<9``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ena-webin-cli

   and update with::

      conda update ena-webin-cli

   or use the docker container::

      docker pull quay.io/biocontainers/ena-webin-cli:<tag>

   (see `ena-webin-cli/tags`_ for valid values for ``<tag>``)


.. |downloads_ena-webin-cli| image:: https://img.shields.io/conda/dn/bioconda/ena-webin-cli.svg?style=flat
   :target: https://anaconda.org/bioconda/ena-webin-cli
   :alt:   (downloads)
.. |docker_ena-webin-cli| image:: https://quay.io/repository/biocontainers/ena-webin-cli/status
   :target: https://quay.io/repository/biocontainers/ena-webin-cli
.. _`ena-webin-cli/tags`: https://quay.io/repository/biocontainers/ena-webin-cli?tab=tags


.. raw:: html

    <script>
        var package = "ena-webin-cli";
        var versions = ["4.0.0","3.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ena-webin-cli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ena-webin-cli/README.html