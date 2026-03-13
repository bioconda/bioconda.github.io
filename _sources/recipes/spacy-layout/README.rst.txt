:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spacy-layout'
.. highlight: bash

spacy-layout
============

.. conda:recipe:: spacy-layout
   :replaces_section_title:
   :noindex:

   Use spaCy with PDFs\, Word docs and other documents

   :homepage: https://github.com/explosion/spacy-layout
   :license: MIT
   :recipe: /`spacy-layout <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacy-layout>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spacy-layout/meta.yaml>`_

   


.. conda:package:: spacy-layout

   |downloads_spacy-layout| |docker_spacy-layout|

   :versions:
      
      

      ``0.0.12-0``

      

   
   :depends on docling: ``>=2.45.0``
   :depends on pandas: 
   :depends on pypdfium2: ``>=4.30.0,<5.0.0,!=4.30.1``
   :depends on python: ``>=3.10``
   :depends on spacy: ``>=3.7.5``
   :depends on srsly: 

   :additional platforms:
      

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

    pixi global install spacy-layout

to add into an existing workspace instead, run::

    pixi add spacy-layout

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spacy-layout

Alternatively, to install into a new environment, run::

    conda create -n envname spacy-layout

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spacy-layout:<tag>

(see `spacy-layout/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spacy-layout| image:: https://img.shields.io/conda/dn/bioconda/spacy-layout.svg?style=flat
   :target: https://anaconda.org/bioconda/spacy-layout
   :alt:   (downloads)
.. |docker_spacy-layout| image:: https://quay.io/repository/biocontainers/spacy-layout/status
   :target: https://quay.io/repository/biocontainers/spacy-layout
.. _`spacy-layout/tags`: https://quay.io/repository/biocontainers/spacy-layout?tab=tags


.. raw:: html

    <script>
        var package = "spacy-layout";
        var versions = ["0.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spacy-layout/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spacy-layout/README.html