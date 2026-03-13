:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sirius-csifingerid'
.. highlight: bash

sirius-csifingerid
==================

.. conda:recipe:: sirius-csifingerid
   :replaces_section_title:
   :noindex:

   SIRIUS \(CLI \+ GUI\) LC\-MS\/MS data analyses framework. Includes\: SIRIUS\, ZODIAC\, CSI\:FingerID \(with COSMIC\) and CANOPUS

   :homepage: https://bio.informatik.uni-jena.de/software/sirius/
   :documentation: https://boecker-lab.github.io/docs.sirius.github.io/
   
   :developer docs: https://github.com/boecker-lab/sirius
   :license: AGPL-3.0-only AND OTHER
   :recipe: /`sirius-csifingerid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sirius-csifingerid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sirius-csifingerid/meta.yaml>`_

   SIRIUS is a java\-based software framework for the analysis of LC\-MS\/MS data of metabolites and other small molecules of biological interest. SIRIUS integrates a collection of our tools\, including CSI\:FingerID \(with COSMIC\)\, ZODIAC and CANOPUS.  In particular\, both the graphical user interface and the command line version of SIRIUS seamlessly integrate the CSI\:FingerID and CANOPUS web services.


.. conda:package:: sirius-csifingerid

   |downloads_sirius-csifingerid| |docker_sirius-csifingerid|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>5.8.6-0</code>,  <code>5.8.5-0</code>,  <code>5.8.4-0</code>,  <code>5.8.3-0</code>,  <code>5.8.2-0</code>,  <code>4.9.15-3</code>,  <code>4.9.15-2</code>,  <code>4.9.15-1</code>,  <code>4.9.15-0</code>,  </span></summary>
      

      ``5.8.6-0``,  ``5.8.5-0``,  ``5.8.4-0``,  ``5.8.3-0``,  ``5.8.2-0``,  ``4.9.15-3``,  ``4.9.15-2``,  ``4.9.15-1``,  ``4.9.15-0``,  ``4.9.8-2``,  ``4.9.8-1``,  ``4.9.8-0``,  ``4.9.4-0``,  ``4.9.3-0``,  ``4.0.1-1``,  ``4.0.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on coin-or-cbc: 
   :depends on openjdk: ``17.*``

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

    pixi global install sirius-csifingerid

to add into an existing workspace instead, run::

    pixi add sirius-csifingerid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sirius-csifingerid

Alternatively, to install into a new environment, run::

    conda create -n envname sirius-csifingerid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sirius-csifingerid:<tag>

(see `sirius-csifingerid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sirius-csifingerid| image:: https://img.shields.io/conda/dn/bioconda/sirius-csifingerid.svg?style=flat
   :target: https://anaconda.org/bioconda/sirius-csifingerid
   :alt:   (downloads)
.. |docker_sirius-csifingerid| image:: https://quay.io/repository/biocontainers/sirius-csifingerid/status
   :target: https://quay.io/repository/biocontainers/sirius-csifingerid
.. _`sirius-csifingerid/tags`: https://quay.io/repository/biocontainers/sirius-csifingerid?tab=tags


.. raw:: html

    <script>
        var package = "sirius-csifingerid";
        var versions = ["5.8.6","5.8.5","5.8.4","5.8.3","5.8.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sirius-csifingerid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sirius-csifingerid/README.html