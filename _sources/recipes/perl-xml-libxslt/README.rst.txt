:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-libxslt'
.. highlight: bash

perl-xml-libxslt
================

.. conda:recipe:: perl-xml-libxslt
   :replaces_section_title:
   :noindex:

   Interface to GNOME libxslt library

   :homepage: https://metacpan.org/pod/XML::LibXSLT
   :license: perl_5
   :recipe: /`perl-xml-libxslt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-libxslt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-libxslt/meta.yaml>`_

   


.. conda:package:: perl-xml-libxslt

   |downloads_perl-xml-libxslt| |docker_perl-xml-libxslt|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.002001-2</code>,  <code>2.002001-1</code>,  <code>2.002001-0</code>,  <code>2.002000-1</code>,  <code>2.002000-0</code>,  <code>2.001000-0</code>,  <code>2.000000-0</code>,  <code>1.99-1</code>,  <code>1.99-0</code>,  </span></summary>
      

      ``2.002001-2``,  ``2.002001-1``,  ``2.002001-0``,  ``2.002000-1``,  ``2.002000-0``,  ``2.001000-0``,  ``2.000000-0``,  ``1.99-1``,  ``1.99-0``,  ``1.94-2``,  ``1.94-1``,  ``1.94-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libxslt: ``>=1.1.35,<2.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-xml-libxml: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-xml-libxslt

   and update with::

      mamba update perl-xml-libxslt

  To create a new environment, run::

      mamba create --name myenvname perl-xml-libxslt

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-libxslt:<tag>

   (see `perl-xml-libxslt/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-libxslt| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-libxslt.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-libxslt
   :alt:   (downloads)
.. |docker_perl-xml-libxslt| image:: https://quay.io/repository/biocontainers/perl-xml-libxslt/status
   :target: https://quay.io/repository/biocontainers/perl-xml-libxslt
.. _`perl-xml-libxslt/tags`: https://quay.io/repository/biocontainers/perl-xml-libxslt?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-libxslt";
        var versions = ["2.002001","2.002001","2.002001","2.002000","2.002000"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-libxslt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-libxslt/README.html