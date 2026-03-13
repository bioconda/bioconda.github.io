:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydna'
.. highlight: bash

pydna
=====

.. conda:recipe:: pydna
   :replaces_section_title:
   :noindex:

   Representing double stranded DNA and functions for simulating cloning and homologous recombination between DNA molecules.

   :homepage: https://github.com/BjornFJohansson/pydna
   :license: BSD / BSD-3-Clause
   :recipe: /`pydna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydna/meta.yaml>`_

   


.. conda:package:: pydna

   |downloads_pydna| |docker_pydna|

   :versions:
      
      

      ``5.2.0-0``,  ``3.1.0-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0a3-0``

      

   
   :depends on appdirs: ``>=1.4.4``
   :depends on biopython: ``>=1.80``
   :depends on networkx: ``>=2.8.8``
   :depends on prettytable: ``>=3.5.0``
   :depends on pyfiglet: ``>=0.8.post1``
   :depends on pyparsing: ``>=2.4.7``
   :depends on pyperclip: ``>=1.8.2``
   :depends on python: ``>=3.8``
   :depends on requests: ``>=2.26.0``

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

    pixi global install pydna

to add into an existing workspace instead, run::

    pixi add pydna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pydna

Alternatively, to install into a new environment, run::

    conda create -n envname pydna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pydna:<tag>

(see `pydna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pydna| image:: https://img.shields.io/conda/dn/bioconda/pydna.svg?style=flat
   :target: https://anaconda.org/bioconda/pydna
   :alt:   (downloads)
.. |docker_pydna| image:: https://quay.io/repository/biocontainers/pydna/status
   :target: https://quay.io/repository/biocontainers/pydna
.. _`pydna/tags`: https://quay.io/repository/biocontainers/pydna?tab=tags


.. raw:: html

    <script>
        var package = "pydna";
        var versions = ["5.2.0","3.1.0","3.0.2","3.0.1","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydna/README.html