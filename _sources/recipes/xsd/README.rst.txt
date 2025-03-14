:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xsd'
.. highlight: bash

xsd
===

.. conda:recipe:: xsd
   :replaces_section_title:
   :noindex:

   CodeSynthesis XSD is an open\-source\, cross\-platform W3C XML Schema to C\+\+ data binding compiler. Provided with an XML instance specification \(XML Schema\)\, it generates C\+\+ classes that represent the given vocabulary as well as XML parsing and serialization code.

   :homepage: http://www.codesynthesis.com/products/xsd/
   :license: GPL
   :recipe: /`xsd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xsd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xsd/meta.yaml>`_

   


.. conda:package:: xsd

   |downloads_xsd| |docker_xsd|

   :versions:
      
      

      ``4.0.0_dep-6``,  ``4.0.0_dep-4``,  ``4.0.0_dep-3``,  ``4.0.0_dep-2``,  ``4.0.0_dep-1``,  ``4.0.0_dep-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends xerces-c: ``>=3.2.5,<3.3.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install xsd

   and update with::

      mamba update xsd

  To create a new environment, run::

      mamba create --name myenvname xsd

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/xsd:<tag>

   (see `xsd/tags`_ for valid values for ``<tag>``)


.. |downloads_xsd| image:: https://img.shields.io/conda/dn/bioconda/xsd.svg?style=flat
   :target: https://anaconda.org/bioconda/xsd
   :alt:   (downloads)
.. |docker_xsd| image:: https://quay.io/repository/biocontainers/xsd/status
   :target: https://quay.io/repository/biocontainers/xsd
.. _`xsd/tags`: https://quay.io/repository/biocontainers/xsd?tab=tags


.. raw:: html

    <script>
        var package = "xsd";
        var versions = ["4.0.0_dep","4.0.0_dep","4.0.0_dep","4.0.0_dep","4.0.0_dep"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xsd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xsd/README.html