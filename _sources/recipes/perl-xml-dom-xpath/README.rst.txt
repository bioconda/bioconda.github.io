:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-dom-xpath'
.. highlight: bash

perl-xml-dom-xpath
==================

.. conda:recipe:: perl-xml-dom-xpath
   :replaces_section_title:
   :noindex:

   Perl extension to add XPath support to XML\:\:DOM\, using XML\:\:XPath engine

   :homepage: http://metacpan.org/pod/XML-DOM-XPath
   :license: unknown
   :recipe: /`perl-xml-dom-xpath <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-dom-xpath>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-dom-xpath/meta.yaml>`_

   


.. conda:package:: perl-xml-dom-xpath

   |downloads_perl-xml-dom-xpath| |docker_perl-xml-dom-xpath|

   :versions:
      
      

      ``0.14-2``,  ``0.14-1``,  ``0.14-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-xml-dom: 
   :depends perl-xml-xpathengine: 
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

      mamba install perl-xml-dom-xpath

   and update with::

      mamba update perl-xml-dom-xpath

  To create a new environment, run::

      mamba create --name myenvname perl-xml-dom-xpath

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-dom-xpath:<tag>

   (see `perl-xml-dom-xpath/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-dom-xpath| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-dom-xpath.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-dom-xpath
   :alt:   (downloads)
.. |docker_perl-xml-dom-xpath| image:: https://quay.io/repository/biocontainers/perl-xml-dom-xpath/status
   :target: https://quay.io/repository/biocontainers/perl-xml-dom-xpath
.. _`perl-xml-dom-xpath/tags`: https://quay.io/repository/biocontainers/perl-xml-dom-xpath?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-dom-xpath";
        var versions = ["0.14","0.14","0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-dom-xpath/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-dom-xpath/README.html