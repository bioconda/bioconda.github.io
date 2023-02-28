:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'perl-svg-graph'
.. highlight: bash

perl-svg-graph
==============

.. conda:recipe:: perl-svg-graph
   :replaces_section_title:
   :noindex:

   Visualize your data in Scalable Vector Graphics \(SVG\) format.

   :homepage: http://metacpan.org/pod/SVG-Graph
   :license: unknown
   :recipe: /`perl-svg-graph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-svg-graph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/perl-svg-graph/meta.yaml>`_

   


.. conda:package:: perl-svg-graph

   |downloads_perl-svg-graph| |docker_perl-svg-graph|

   :versions:
      
      

      ``0.02-4``,  ``0.02-3``,  ``0.02-2``,  ``0.02-1``,  ``0.02-0``

      

   
   :depends perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends perl-math-derivative: 
   :depends perl-math-spline: 
   :depends perl-statistics-descriptive: 
   :depends perl-svg: 
   :depends perl-tree-dag_node: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install perl-svg-graph

   and update with::

      conda update perl-svg-graph

   or use the docker container::

      docker pull quay.io/biocontainers/perl-svg-graph:<tag>

   (see `perl-svg-graph/tags`_ for valid values for ``<tag>``)


.. |downloads_perl-svg-graph| image:: https://img.shields.io/conda/dn/bioconda/perl-svg-graph.svg?style=flat
   :target: https://anaconda.org/bioconda/perl-svg-graph
   :alt:   (downloads)
.. |docker_perl-svg-graph| image:: https://quay.io/repository/biocontainers/perl-svg-graph/status
   :target: https://quay.io/repository/biocontainers/perl-svg-graph
.. _`perl-svg-graph/tags`: https://quay.io/repository/biocontainers/perl-svg-graph?tab=tags


.. raw:: html

    <script>
        var package = "perl-svg-graph";
        var versions = ["0.02","0.02","0.02","0.02","0.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/perl-svg-graph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/perl-svg-graph/README.html