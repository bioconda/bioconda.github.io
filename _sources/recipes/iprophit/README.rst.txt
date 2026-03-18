:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iprophit'
.. highlight: bash

iprophit
========

.. conda:recipe:: iprophit
   :replaces_section_title:
   :noindex:

   Deep learning approach for identifying inducible prophage activity

   :homepage: https://github.com/HongboZhang-z3d/iProphIT-FAFU
   :documentation: https://doi.org/10.5281/zenodo.17605580
   
   :license: GPL-3.0-only
   :recipe: /`iprophit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iprophit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iprophit/meta.yaml>`_

   A deep learning approach that identifies the inducible activity of 
   prophages from their DNA sequences.



.. conda:package:: iprophit

   |downloads_iprophit| |docker_iprophit|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.86``
   :depends on numpy: ``>=2.0``
   :depends on pandas: 
   :depends on python: ``>=3.12``
   :depends on pytorch: ``>=2.6.0``
   :depends on requests: 
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

    pixi global install iprophit

to add into an existing workspace instead, run::

    pixi add iprophit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install iprophit

Alternatively, to install into a new environment, run::

    conda create -n envname iprophit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/iprophit:<tag>

(see `iprophit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_iprophit| image:: https://img.shields.io/conda/dn/bioconda/iprophit.svg?style=flat
   :target: https://anaconda.org/bioconda/iprophit
   :alt:   (downloads)
.. |docker_iprophit| image:: https://quay.io/repository/biocontainers/iprophit/status
   :target: https://quay.io/repository/biocontainers/iprophit
.. _`iprophit/tags`: https://quay.io/repository/biocontainers/iprophit?tab=tags


.. raw:: html

    <script>
        var package = "iprophit";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iprophit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iprophit/README.html