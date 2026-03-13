:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tagger'
.. highlight: bash

tagger
======

.. conda:recipe:: tagger
   :replaces_section_title:
   :noindex:

   tagger allows you to tag a corpus of documents with search terms that you provide. It is often used to find mentions of proteins\, species\, diseases\, tissues\, chemicals and drugs\, GO terms\, and so forth\, in articles in the Medline corpus.

   :homepage: https://github.com/larsjuhljensen/tagger
   :documentation: https://github.com/larsjuhljensen/tagger/blob/1.1/README.md
   
   :license: BSD / BSD-2-Clause
   :recipe: /`tagger <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagger>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tagger/meta.yaml>`_

   


.. conda:package:: tagger

   |downloads_tagger| |docker_tagger|

   :versions:
      
      

      ``1.1-2``,  ``1.1-0``

      

   
   :depends on boost-cpp: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install tagger

to add into an existing workspace instead, run::

    pixi add tagger

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tagger

Alternatively, to install into a new environment, run::

    conda create -n envname tagger

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tagger:<tag>

(see `tagger/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tagger| image:: https://img.shields.io/conda/dn/bioconda/tagger.svg?style=flat
   :target: https://anaconda.org/bioconda/tagger
   :alt:   (downloads)
.. |docker_tagger| image:: https://quay.io/repository/biocontainers/tagger/status
   :target: https://quay.io/repository/biocontainers/tagger
.. _`tagger/tags`: https://quay.io/repository/biocontainers/tagger?tab=tags


.. raw:: html

    <script>
        var package = "tagger";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tagger/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tagger/README.html