:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pretextgraph'
.. highlight: bash

pretextgraph
============

.. conda:recipe:: pretextgraph
   :replaces_section_title:
   :noindex:

   Embeds bedgraph data into Pretext contact maps.

   :homepage: https://github.com/wtsi-hpag/PretextGraph
   :license: MIT / MIT
   :recipe: /`pretextgraph <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextgraph>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pretextgraph/meta.yaml>`_

   This is a tool for converting data from a bedgraph format and embedding into a Hi\-C contact map in the Pretext format. The graph data can then be displayed alongside the contact map using the PretextView desktop software \(https\:\/\/github.com\/wtsi\-hpag\/PretextView\). See https\:\/\/github.com\/wtsi\-hpag\/PretextMap for how to generate Pretext contact maps\, or search for pretextmap on bioconda.


.. conda:package:: pretextgraph

   |downloads_pretextgraph| |docker_pretextgraph|

   :versions:
      
      

      ``0.0.6-3``,  ``0.0.6-2``,  ``0.0.6-1``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends libcxx: ``>=15.0.7``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pretextgraph

   and update with::

      conda update pretextgraph

   or use the docker container::

      docker pull quay.io/biocontainers/pretextgraph:<tag>

   (see `pretextgraph/tags`_ for valid values for ``<tag>``)


.. |downloads_pretextgraph| image:: https://img.shields.io/conda/dn/bioconda/pretextgraph.svg?style=flat
   :target: https://anaconda.org/bioconda/pretextgraph
   :alt:   (downloads)
.. |docker_pretextgraph| image:: https://quay.io/repository/biocontainers/pretextgraph/status
   :target: https://quay.io/repository/biocontainers/pretextgraph
.. _`pretextgraph/tags`: https://quay.io/repository/biocontainers/pretextgraph?tab=tags


.. raw:: html

    <script>
        var package = "pretextgraph";
        var versions = ["0.0.6","0.0.6","0.0.6","0.0.6","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pretextgraph/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pretextgraph/README.html