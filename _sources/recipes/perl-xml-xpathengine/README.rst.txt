:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-xml-xpathengine'
.. highlight: bash

perl-xml-xpathengine
====================

.. conda:recipe:: perl-xml-xpathengine
   :replaces_section_title:
   :noindex:

   a re\-usable XPath engine for DOM\-like trees

   :homepage: http://metacpan.org/pod/XML-XPathEngine
   :license: unknown
   :recipe: /`perl-xml-xpathengine <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-xpathengine>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-xml-xpathengine/meta.yaml>`_

   


.. conda:package:: perl-xml-xpathengine

   |downloads_perl-xml-xpathengine| |docker_perl-xml-xpathengine|

   :versions:
      
      

      ``0.14-3``,  ``0.14-2``,  ``0.14-1``,  ``0.14-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install perl-xml-xpathengine

   and update with::

      mamba update perl-xml-xpathengine

  To create a new environment, run::

      mamba create --name myenvname perl-xml-xpathengine

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/perl-xml-xpathengine:<tag>

   (see `perl-xml-xpathengine/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-xml-xpathengine| image:: https://img.shields.io/conda/dn/bioconda/perl-xml-xpathengine.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-xml-xpathengine
   :alt:   (downloads)
.. |docker_perl-xml-xpathengine| image:: https://quay.io/repository/biocontainers/perl-xml-xpathengine/status
   :target: https://quay.io/repository/biocontainers/perl-xml-xpathengine
.. _`perl-xml-xpathengine/tags`: https://quay.io/repository/biocontainers/perl-xml-xpathengine?tab=tags


.. raw:: html

    <script>
        var package = "perl-xml-xpathengine";
        var versions = ["0.14","0.14","0.14","0.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-xml-xpathengine/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-xml-xpathengine/README.html