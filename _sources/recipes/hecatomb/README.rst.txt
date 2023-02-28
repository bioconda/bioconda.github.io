:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hecatomb'
.. highlight: bash

hecatomb
========

.. conda:recipe:: hecatomb
   :replaces_section_title:
   :noindex:

   Accurate classification of viral sequences from metagenome samples

   :homepage: https://github.com/shandley/hecatomb
   :documentation: https://hecatomb.readthedocs.io/en/latest/
   
   :license: MIT
   :recipe: /`hecatomb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hecatomb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hecatomb/meta.yaml>`_

   


.. conda:package:: hecatomb

   |downloads_hecatomb| |docker_hecatomb|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0.beta.5-0``,  ``1.0.0.beta.4-0``,  ``1.0.0.beta.3-0``,  ``1.0.0.beta.2-1``,  ``1.0.0.beta.2-0``

      

   
   :depends click: ``>=8.0.4``
   :depends jinja2: ``>=3.0.2``
   :depends mamba: ``>=0.19.0``
   :depends networkx: ``>=2.6.3``
   :depends pygments: ``>=2.10.0``
   :depends pygraphviz: ``>=1.7``
   :depends python: ``>=3.9``
   :depends pyyaml: ``>=5.4.1``
   :depends snakemake-minimal: ``>=6.10.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hecatomb

   and update with::

      conda update hecatomb

   or use the docker container::

      docker pull quay.io/biocontainers/hecatomb:<tag>

   (see `hecatomb/tags`_ for valid values for ``<tag>``)


.. |downloads_hecatomb| image:: https://img.shields.io/conda/dn/bioconda/hecatomb.svg?style=flat
   :target: https://anaconda.org/bioconda/hecatomb
   :alt:   (downloads)
.. |docker_hecatomb| image:: https://quay.io/repository/biocontainers/hecatomb/status
   :target: https://quay.io/repository/biocontainers/hecatomb
.. _`hecatomb/tags`: https://quay.io/repository/biocontainers/hecatomb?tab=tags


.. raw:: html

    <script>
        var package = "hecatomb";
        var versions = ["1.1.0","1.0.1","1.0.0.beta.5","1.0.0.beta.4","1.0.0.beta.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hecatomb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hecatomb/README.html