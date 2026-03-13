:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rodeo'
.. highlight: bash

rodeo
=====

.. conda:recipe:: rodeo
   :replaces_section_title:
   :noindex:

   RODEO evaluates one or many genes\, characterizing a gene neighborhood based on the presence of profile hidden Markov models \(pHMMs\). Because RiPP precursor peptides are small and often evade annotation in sequence databases\, RODEO can also manually translate small ORFs \(open reading frames\). A combination of support vector machine \(SVM\) learning and motif analysis can be used to scan unannotated intergenic regions for RiPP precursors.

   :homepage: http://ripp.rodeo/index.html
   :license: AGPL
   :recipe: /`rodeo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rodeo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rodeo/meta.yaml>`_

   


.. conda:package:: rodeo

   |downloads_rodeo| |docker_rodeo|

   :versions:
      
      

      ``2.3.3-1``,  ``2.3.3-0``

      

   
   :depends on biopython: 
   :depends on hmmer: 
   :depends on meme: 
   :depends on numpy: 
   :depends on python: ``>=3``
   :depends on scikit-learn: 

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

    pixi global install rodeo

to add into an existing workspace instead, run::

    pixi add rodeo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rodeo

Alternatively, to install into a new environment, run::

    conda create -n envname rodeo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rodeo:<tag>

(see `rodeo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rodeo| image:: https://img.shields.io/conda/dn/bioconda/rodeo.svg?style=flat
   :target: https://anaconda.org/bioconda/rodeo
   :alt:   (downloads)
.. |docker_rodeo| image:: https://quay.io/repository/biocontainers/rodeo/status
   :target: https://quay.io/repository/biocontainers/rodeo
.. _`rodeo/tags`: https://quay.io/repository/biocontainers/rodeo?tab=tags


.. raw:: html

    <script>
        var package = "rodeo";
        var versions = ["2.3.3","2.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rodeo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rodeo/README.html