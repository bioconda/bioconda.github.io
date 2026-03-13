:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqan'
.. highlight: bash

seqan
=====

.. conda:recipe:: seqan
   :replaces_section_title:
   :noindex:

   SeqAn is a C\+\+ template library for the analysis of biological sequences.

   :homepage: https://www.seqan.de
   :documentation: https://seqan.readthedocs.io/en/seqan-v2.5.2
   
   :developer docs: https://github.com/seqan/seqan
   :license: BSD / BSD-3-Clause
   :recipe: /`seqan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqan/meta.yaml>`_

   SeqAn is an open source C\+\+ library of efficient algorithms and data
   structures for the analysis of sequences with the focus on biological data.
   Our library applies a unique generic design that guarantees high
   performance\, generality\, extensibility\, and integration with other
   libraries. SeqAn is easy to use and simplifies the development of new
   software tools with a minimal loss of performance.



.. conda:package:: seqan

   |downloads_seqan| |docker_seqan|

   :versions:
      
      

      ``2.5.2-0``,  ``2.4.0-2``,  ``2.4.0-1``,  ``2.4.0-0``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``

      

   

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install seqan

to add into an existing workspace instead, run::

    pixi add seqan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqan

Alternatively, to install into a new environment, run::

    conda create -n envname seqan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqan:<tag>

(see `seqan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqan| image:: https://img.shields.io/conda/dn/bioconda/seqan.svg?style=flat
   :target: https://anaconda.org/bioconda/seqan
   :alt:   (downloads)
.. |docker_seqan| image:: https://quay.io/repository/biocontainers/seqan/status
   :target: https://quay.io/repository/biocontainers/seqan
.. _`seqan/tags`: https://quay.io/repository/biocontainers/seqan?tab=tags


.. raw:: html

    <script>
        var package = "seqan";
        var versions = ["2.5.2","2.4.0","2.4.0","2.4.0","2.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqan/README.html