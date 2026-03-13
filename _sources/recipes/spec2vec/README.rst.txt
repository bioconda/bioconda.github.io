:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spec2vec'
.. highlight: bash

spec2vec
========

.. conda:recipe:: spec2vec
   :replaces_section_title:
   :noindex:

   Word2Vec based similarity measure of mass spectrometry data.

   :homepage: https://github.com/iomega/spec2vec
   :documentation: https://spec2vec.readthedocs.io/en/latest
   
   :license: APACHE / Apache-2.0
   :recipe: /`spec2vec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spec2vec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spec2vec/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1008724`

   


.. conda:package:: spec2vec

   |downloads_spec2vec| |docker_spec2vec|

   :versions:
      
      

      ``0.9.1-0``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.6.0-0``

      

   
   :depends on fuzzytm: 
   :depends on gensim: ``>=4.2.0``
   :depends on matchms: ``>=0.27.0``
   :depends on numba: ``>=0.51``
   :depends on numpy: 
   :depends on python: ``>=3.10,<3.14``
   :depends on scipy: ``<=1.10.1``
   :depends on tqdm: 

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

    pixi global install spec2vec

to add into an existing workspace instead, run::

    pixi add spec2vec

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spec2vec

Alternatively, to install into a new environment, run::

    conda create -n envname spec2vec

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spec2vec:<tag>

(see `spec2vec/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spec2vec| image:: https://img.shields.io/conda/dn/bioconda/spec2vec.svg?style=flat
   :target: https://anaconda.org/bioconda/spec2vec
   :alt:   (downloads)
.. |docker_spec2vec| image:: https://quay.io/repository/biocontainers/spec2vec/status
   :target: https://quay.io/repository/biocontainers/spec2vec
.. _`spec2vec/tags`: https://quay.io/repository/biocontainers/spec2vec?tab=tags


.. raw:: html

    <script>
        var package = "spec2vec";
        var versions = ["0.9.1","0.8.0","0.8.0","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spec2vec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spec2vec/README.html