:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'arvados-python-client'
.. highlight: bash

arvados-python-client
=====================

.. conda:recipe:: arvados-python-client
   :replaces_section_title:
   :noindex:

   Python API for Arvados

   :homepage: https://github.com/curoverse/arvados/tree/main/sdk/python
   :license: Apache-2.0
   :recipe: /`arvados-python-client <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-python-client>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/arvados-python-client/meta.yaml>`_

   Python API for Arvados\, an open source platform for managing and
   analyzing biomedical big data



.. conda:package:: arvados-python-client

   |downloads_arvados-python-client| |docker_arvados-python-client|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.0-0</code>,  <code>2.7.4-0</code>,  <code>2.7.3-0</code>,  <code>2.7.2-0</code>,  <code>2.7.1-0</code>,  <code>2.7.0-0</code>,  <code>2.6.3-1</code>,  <code>2.6.3-0</code>,  <code>2.6.2-0</code>,  </span></summary>
      

      ``3.0.0-0``,  ``2.7.4-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.3-1``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.0-0``,  ``2.4.4-0``,  ``2.4.3-0``,  ``2.4.2-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.3.3-0``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.4-0``,  ``2.0.3.1-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.3.20190402172810-0``,  ``1.3.2.20190402172810-0``,  ``1.3.1.20190402172810-0``,  ``1.3.1.20190301150258-1``,  ``1.3.1.20190301150258-0``,  ``1.3.0.20190221150417-0``,  ``1.3.0.20190205182514-1``,  ``1.3.0.20190205182514-0``,  ``1.3.0.20181130020805-0``,  ``1.2.1-0``,  ``1.2.0.20181121194423-0``,  ``1.2.0.20181109162613-0``,  ``1.2.0.20181108215719-0``,  ``1.2.0.20180905185317-0``,  ``0.1.20171211211613-1``,  ``0.1.20171211211613-0``,  ``0.1.20171010180436-0``,  ``0.1.20170818194607-0``,  ``0.1.20161123074954-0``,  ``0.1.20161031135838-0``,  ``0.1.20160517202250-1``,  ``0.1.20160517202250-0``,  ``0.1.20160412193510-0``,  ``0.1.20160331153549-0``,  ``0.1.20160318153100-0``,  ``0.1.20160301181511-0``

      
      .. raw:: html

         </details>
      

   
   :depends ciso8601: ``>=2.0.0``
   :depends dataclasses: 
   :depends future: 
   :depends google-api-core: ``<2.11.0``
   :depends google-api-python-client: ``>=2.1.0``
   :depends google-auth: ``<2``
   :depends httplib2: ``>=0.9.2,<0.20.2``
   :depends protobuf: ``<4.0.0``
   :depends pycurl: ``>=7.19.5.1,<7.45.0``
   :depends pyparsing: ``<3``
   :depends python: ``>=3``
   :depends ruamel.yaml: ``>=0.15.54,<0.17.22``
   :depends setuptools: ``>=40.3.0``
   :depends typing-extensions: ``>=3.7.4``
   :depends websockets: 
   :depends ws4py: ``>=0.4.2``
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

      mamba install arvados-python-client

   and update with::

      mamba update arvados-python-client

  To create a new environment, run::

      mamba create --name myenvname arvados-python-client

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/arvados-python-client:<tag>

   (see `arvados-python-client/tags`_ for valid values for ``<tag>``)


.. |downloads_arvados-python-client| image:: https://img.shields.io/conda/dn/bioconda/arvados-python-client.svg?style=flat
   :target: https://anaconda.org/bioconda/arvados-python-client
   :alt:   (downloads)
.. |docker_arvados-python-client| image:: https://quay.io/repository/biocontainers/arvados-python-client/status
   :target: https://quay.io/repository/biocontainers/arvados-python-client
.. _`arvados-python-client/tags`: https://quay.io/repository/biocontainers/arvados-python-client?tab=tags


.. raw:: html

    <script>
        var package = "arvados-python-client";
        var versions = ["3.0.0","2.7.4","2.7.3","2.7.2","2.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/arvados-python-client/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/arvados-python-client/README.html