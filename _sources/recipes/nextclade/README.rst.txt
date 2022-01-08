:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nextclade'
.. highlight: bash

nextclade
=========

.. conda:recipe:: nextclade
   :replaces_section_title:
   :noindex:

   SARS\-CoV\-2 genome clade assignment\, mutation calling\, and sequence quality checks

   :homepage: https://github.com/nextstrain/nextclade/tree/master/packages/nextclade_cli
   :documentation: https://docs.nextstrain.org/projects/nextclade/en/stable/user/nextclade-cli.html#
   
   :developer docs: https://github.com/nextstrain/nextclade
   :license: MIT / MIT
   :recipe: /`nextclade <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextclade>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nextclade/meta.yaml>`_

   


.. conda:package:: nextclade

   |downloads_nextclade| |docker_nextclade|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.8.1-0</code>,  <code>1.8.0-0</code>,  <code>1.7.0-0</code>,  <code>1.6.0-0</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.5-0</code>,  <code>1.4.4-0</code>,  <code>1.4.1-0</code>,  </span></summary>
      

      ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.0-0``,  ``1.6.0-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.0-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nextclade

   and update with::

      conda update nextclade

   or use the docker container::

      docker pull quay.io/biocontainers/nextclade:<tag>

   (see `nextclade/tags`_ for valid values for ``<tag>``)


.. |downloads_nextclade| image:: https://img.shields.io/conda/dn/bioconda/nextclade.svg?style=flat
   :target: https://anaconda.org/bioconda/nextclade
   :alt:   (downloads)
.. |docker_nextclade| image:: https://quay.io/repository/biocontainers/nextclade/status
   :target: https://quay.io/repository/biocontainers/nextclade
.. _`nextclade/tags`: https://quay.io/repository/biocontainers/nextclade?tab=tags


.. raw:: html

    <script>
        var package = "nextclade";
        var versions = ["1.8.1","1.8.0","1.7.0","1.6.0","1.5.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nextclade/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nextclade/README.html