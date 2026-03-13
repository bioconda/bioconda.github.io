:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'freqsap'
.. highlight: bash

freqsap
=======

.. conda:recipe:: freqsap
   :replaces_section_title:
   :noindex:

   freqsap can be used to query the frequency of single amino\-acid polymorphisms

   :homepage: https://github.com/RECETOX/freqsap
   :license: MIT
   :recipe: /`freqsap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freqsap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freqsap/meta.yaml>`_

   


.. conda:package:: freqsap

   |downloads_freqsap| |docker_freqsap|

   :versions:
      
      

      ``1.1.0-0``,  ``0.1.0-0``

      

   
   :depends on openpyxl: 
   :depends on python: ``>=3.8``
   :depends on requests: 

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

    pixi global install freqsap

to add into an existing workspace instead, run::

    pixi add freqsap

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install freqsap

Alternatively, to install into a new environment, run::

    conda create -n envname freqsap

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/freqsap:<tag>

(see `freqsap/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_freqsap| image:: https://img.shields.io/conda/dn/bioconda/freqsap.svg?style=flat
   :target: https://anaconda.org/bioconda/freqsap
   :alt:   (downloads)
.. |docker_freqsap| image:: https://quay.io/repository/biocontainers/freqsap/status
   :target: https://quay.io/repository/biocontainers/freqsap
.. _`freqsap/tags`: https://quay.io/repository/biocontainers/freqsap?tab=tags


.. raw:: html

    <script>
        var package = "freqsap";
        var versions = ["1.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/freqsap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/freqsap/README.html